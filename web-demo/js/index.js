async function init(){
    model= await tf.loadGraphModel('./tfjs_model/model.json');
    console.log('load model...');
    predict();
}

function predict(){
    let tensor=tf.tensor([[0.6, 0.2]]);
    // 預測 
    const pred = model.predict(tensor);
    const result = pred.dataSync();
    console.log(result[0])
}