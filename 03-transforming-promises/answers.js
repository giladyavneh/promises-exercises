/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(function(res){
      try{
        let good=transformer(res)
        resolve(good)
      }
      catch(e){
      reject(e)
      }
    }).catch(err=>reject(err))
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return new Promise((resolve,reject)=>{
    numberPromise.then(res=>{
      if(Number.isInteger(res)){
        resolve(res*res)
      }
      else{
        if(isNaN(parseInt(res))){
          reject(`Cannot convert '${res}' to a number!`)
        }
        else{
          resolve(parseInt(res)*parseInt(res))
        }
      }
    }).catch(e=>reject(e))
  })

}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return new Promise((resolve,reject)=>{
    promise.then(res=>{
      if(Number.isInteger(res)){
        resolve(res*res)
      }
      else{
        if(isNaN(parseInt(res))){
          resolve(0)
        }
        else{
          resolve(parseInt(res)*parseInt(res))
        }
      }
    }).catch(e=>resolve(0))
  })
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return new Promise((resolve,reject)=>{
    promise.then(res=>reject(res)).catch(err=>resolve(err))
  })
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};