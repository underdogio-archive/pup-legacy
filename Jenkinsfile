def helpers
fileLoader.withGit('git@github.com:underdogio/jenkins-workflow-libs.git', 'master', null, '') {
  helpers = fileLoader.load('helpers')
}

node {
  helpers.attemptBuild {
    def img
    stage('Build') {
      deleteDir()
      checkout scm
      img = docker.build "pup:${env.BUILD_TAG}"
    }

    stage('Test') {
      img.inside {
        // Run tests
        sh 'npm test'
      }
    }
  }
}
