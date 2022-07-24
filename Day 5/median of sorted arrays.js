/// Program to return the median of two sorted arrays of the same size.

const arr1 = [18,23,45,80,84,90,100];
const arr2 = [11,27,34,54,55,68,86];
const n1 = arr1.length;
const n2 = arr2.length;

let isMedian = function Median(arr1, arr2, n){ ///function defined as an anonymous function.
    let i = 0;
    let j = 0;
    let count;
    let m1 = -1;
    let m2 = -1;
    for (count = 0; count <= n; count++){
        if (i == n){
            m1 = m2;
            m2 =arr2[0];
            break;
        }
        else if (j ==n) {
            m1=m2;
            m2 = arr1[0];
            break;
        }
        if (arr1[i] <= arr2[j]){
            m1 = m2;
            m2 = arr1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
if(n1 == n2)
console.log(`The median is ${isMedian(arr1, arr2, n1)}`);


///////function declaration in IIFA type.


(function (median) {
    function Median(arr1, arr2, n){ ///function defined as an anonymous function.
        let i = 0;
        let j = 0;
        let count;
        let m1 = -1;
        let m2 = -1;
        for (count = 0; count <= n; count++){
            if (i == n){
                m1 = m2;
                m2 =arr2[0];
                break;
            }
            else if (j ==n) {
                m1=m2;
                m2 = arr1[0];
                break;
            }
            if (arr1[i] <= arr2[j]){
                m1 = m2;
                m2 = arr1[i];
                i++;
            }
            else {
                m1 = m2;
                m2 = arr2[j];
                j++;
            }
        }
        return (m1 + m2)/2;
    }
    if(n1 == n2)
    console.log(`The median is ${Median(arr1, arr2, n1)}`);
})();
////////////////
/* The expected output is :"The median is 54.5."
*/
