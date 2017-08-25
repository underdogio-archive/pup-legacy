def nodejs, helpers
fileLoader.withGit('git@github.com:underdogio/jenkins-workflow-libs.git', 'master', null, '') {
  nodejs = fileLoader.load('nodejs')
  helpers = fileLoader.load('helpers')
}

node {
  helpers.attemptBuild {
    stage 'Setup'
      deleteDir()
      checkout scm
      nodejs.setup('v8.3.0')

    stage 'Install'
      nodejs.install()

    stage 'Test'
      nodejs.test()

    if (env.BRANCH_NAME == 'master') {
      stage 'Production Build'
        nodejs.build(production:true)

      stage 'Archive'
        def repoName = 'pup'
        def deployTag = helpers.newDeployTag()
        helpers.generateArtifact(repoName, deployTag)
        currentBuild.description = "Artifact tag: ${deployTag}"
    }
  }
}
