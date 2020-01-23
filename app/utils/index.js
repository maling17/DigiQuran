export const createAsyncDelay = duration => {

    return new Promise((resolve, _) => setTimeout(() => { resolve(); }, duration));
};

export const toArabicNumber = (number) => {

    if(typeof number == 'undefined') return null;
    
    var id = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    var toString = number.toString();
    // var arabic = toString.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
    // console.log('arabic', number)
    return toString.replace(/[0-9]/g, function(w){
        return id[+w];
    });
    // return arabic;
}