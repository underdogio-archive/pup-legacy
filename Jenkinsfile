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
      img = docker.build "pup:${env.BUILD_TAG}", "--build-arg NODE_ENV=test ."
    }

    stage('Test') {
      sh "docker run --rm --env NODE_ENV=test 'pup:${env.BUILD_TAG}' npm test"
    }

    if (env.BRANCH_NAME == 'master') {
      stage('Production Build') {
        docker.build "pup:${env.BUILD_TAG}", '--build-arg NODE_ENV=production .'
      }
    }
  }
}
