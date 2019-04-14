// function encodeToRot13(str) {
    // function getIdentityMatrix(n) {
    //     let temp = new Array(n).fill(0);
    //     let arr = new Array(n).fill(temp);
    //     let result = arr.map(function(item, i, arr){
    //        return item.map(function(val, j, element){
    //           if (j == i){ return 1;}
    //        })
    //     })
    //     return result;
    //  }

    //  function swapHeadAndTail(arr) {
    //     let l = arr.length; 
    //     let center = arr.slice(Math.floor(l/2), Math.ceil(l/2));
    //     let right = arr.slice(Math.ceil(l/2), l);
    //     let left = arr.slice(0, Math.floor(l/2));
    //     console.log(right.concat(center).concat(left));
    //  }

    // function swapHeadAndTail(arr) {
    //     let right = arr.slice(Math.ceil(arr.length/2), arr.length);
    //     let left = arr.slice(0, Math.floor(arr.length/2));
    //     let result= (arr.splice(0, Math.floor(arr.length/2), right));
    //     console.log(result.splice(Math.ceil(arr.length/2), Math.floor(arr.length/2), left));
    //  }
     
    
    // swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

    //  function getIdentityMatrix(n) {
       
    //     let temp = new Array(n).fill(0).map(function(item, i){
    //        return new Array(n).fill(0).map(function(val, j){
    //              if (j === i) return 1;
    //              else return 0;
    //           })
    //        })
    //        console.log(temp);

/*
           let z= new Array(n).fill(0).map(function(item,i) {
           
                return (new Array(n).fill(0).map(function (item,i1) {
                        return (i==i1)?1:0
                    }
                ))
            }
           );
           
*/
      //  }
     //   console.log( getIdentityMatrix(3));
     
     
// let compare = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// arr.map(function(item, i) {return compare.indexOf(item)});
// arr.sort(function(a, b){return a-b});
// return arr.map((item, i) => compare[i]);
// }

function sortCitiesArray(arr) {

    function compareCountries(a,b) {
       if (a.country < b.country) {
          return -1;
       } else { 
          if (a.country >= b.country) 
          return 1;
        }
    }
        
    let modified = arr.sort(compareCountries);
     
    function compareCities(a,b) {
       if ((a.country == b.country)&&(a.city < b.city)) {
          return -1;
       } else { if ((a.country == b.country)&&(a.city > b.city))
          return 1};
    }
    let result = modified.sort(compareCities);
    
    console.log(result);
}
       sortCitiesArray([{ country: 'Russia',  city: 'Moscow' }, { country: 'Belarus', city: 'Minsk' }, { country: 'Poland',  city: 'Warsaw' }, { country: 'Russia',  city: 'Saint Petersburg' }, { country: 'Poland',  city: 'Krakow' }, { country: 'Belarus', city: 'Brest' }]  )