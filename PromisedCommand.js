const child_process = require('child_process')
module.exports = {
    exec: (command, display) => {
        return new Promise((resolve, reject) => {
            child_process.exec(command, (error, stdout, stderr) => {
                if (display) {
                    console.log(stdout)
                }

                if (stderr) {
                    if (display) {
                        console.log(stderr)
                    }
                    reject(stderr)

                    return
                }

                resolve(stdout)
            })
        })
    }
}