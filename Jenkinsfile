pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/youruser/yourrepo.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('music-app-backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies & Build') {
            steps {
                dir('music-app-frontend') {
                    sh 'npm install'
                    sh 'npm run build'  // create production build
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('music-app-backend') {
                    // optional: stop previous server
                    sh 'pm2 stop music-app || true'
                    // start server with PM2
                    sh 'pm2 start server.js --name music-app'
                    // save PM2 process list
                    sh 'pm2 save'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                dir('music-app-frontend') {
                    // Copy build folder to server's web root
                    sh 'cp -r build/* /var/www/music-app/'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
