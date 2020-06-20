// function MyPromise(excute) {
//     let _resolve;
//     let _reject;
//     const promise = new Promise((resolve, reject) => {
//         _resolve = resolve;
//         _reject = reject;
//     })

//     excute(function(){
//         _resolve(100)
//     })
//     return promise
// }
// let cancel;
// let p = MyPromise(function(c){
//     cancel = c;
// })

// p.then(data=>console.log(data));



var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "/";
xhr.onreadystatechange = () => {
    if(xhr.readyState===4&&xhr.status===200){
        console.log('ok')
    }
}
xhr.open(method, url, true);
xhr.send();
xhr.abort();



var CancelToken = axios.CancelToken;
var source = CancelToken.source();
var { token, cancel } = source;
axios.get("https://cnodejs.org/api/v1/topics", {
    cancelToken: token
}).then(data => {
    setArr(data.data.data);
    console.log("2222");
}).catch(e => {
    console.log(e)
})
cancel();



function CancelToken(executor) {
   
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) {
            return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}

CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};

CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;


if (config.cancelToken) {
    // Handle cancellation
    config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
            return;
        }
        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
    });
}