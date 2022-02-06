pipeline {
  agent {
    label 'freebsd&&nodejs'
  }

  environment {
    // Used for tests, to make Jest running all tests without watcher
    NEXUS = "https://colossus.kruemel.home/nexus/"
    REPOSITORY = "repository/astro-server-web-raw"
    VERSION = sh returnStdout: true, script: 'jq -r .version package.json | tr -d \'\\n\''
  }

  triggers {
    pollSCM '@hourly'
    cron '@daily'
  }

  options {
    ansiColor('xterm')
    timestamps()
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '15')
    disableConcurrentBuilds()
  }

  stages {
    stage('install packages') {
      steps {
        configFileProvider([configFile(fileId: 'e5293454-b063-4d53-be2d-ecb485e4f660', targetLocation: '.npmrc')]) {
          sh 'cat .npmrc'
          sh 'npm install'
        }
      }
    }

    stage('build') {
      steps {
        sh 'npm run-script build'
      }
    }

    stage('verify version') {
      when {
        branch "master"
        not {
          triggeredBy "TimerTrigger"
        }
      }

      steps {
        withCredentials([usernameColonPassword(credentialsId: 'de85340b-c857-49e3-9983-fc959df25943', variable: 'CREDENTIALS')]) {
          sh '''
if curl -f -k -u "$CREDENTIALS" -I funnel-frontend-${VERSION}.tar.gz "${NEXUS}${REPOSITORY}/${VERSION}/astro-server-web-${VERSION}.tar.gz" >/dev/null
then
  echo "### Version ${VERSION} already exists in repository" >&2
  exit 1
else
  echo "Version ${VERSION} not found in repository. Good!"
fi
'''
        }
      }
    }

    stage('deploy') {
      when {
        branch "master"
        not {
          triggeredBy "TimerTrigger"
        }
      }

      steps {
        sh 'tar -C dist/astro-server-web -cvzf astro-server-web-${VERSION}.tar.gz .'

        withCredentials([usernameColonPassword(credentialsId: 'de85340b-c857-49e3-9983-fc959df25943', variable: 'CREDENTIALS')]) {
          sh 'curl -k -u "$CREDENTIALS" --upload-file astro-server-web-${VERSION}.tar.gz "${NEXUS}${REPOSITORY}/${VERSION}/"'
        }

        script {
          def version = env.VERSION
          step([$class                 : "RundeckNotifier",
                includeRundeckLogs     : true,
                jobId                  : "f32a7d62-b42e-4fbb-83df-ccd51c98f810",
                options                : "version=$version",
                rundeckInstance        : "gizmo",
                shouldFailTheBuild     : true,
                shouldWaitForRundeckJob: true,
                tailLog                : true])
        }
      }
    }
  }


  post {
    unsuccessful {
      mail to: "rafi@guengel.ch",
        subject: "${JOB_NAME} (${BRANCH_NAME};${env.BUILD_DISPLAY_NAME}) -- ${currentBuild.currentResult}",
        body: "Refer to ${currentBuild.absoluteUrl}"
    }
  }
}
