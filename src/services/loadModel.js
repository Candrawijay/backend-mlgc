const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/model-storage-can/model.json');
}
module.exports = loadModel;