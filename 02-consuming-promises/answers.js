/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise
 * @param {thunk} action
 * 
 */
function waitForPromise(promise, action){
  promise.then(res=>action(res))
}
/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 */
function consumePromise(promise, consumer, handler){
  promise.then(res=>consumer(res)).catch(err=>handler(err))
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};