function indexOfIgnoreCase(s1, s2) {
  // write your code here
	str1 = s1.toLowerCase();
	str2 = s2.toLowerCase();

	let m = str1.length;
	let n = str2.length;

	for(let i = 0;i<= m-n;i++){
		let j;
		for(j = 0;j<m;j++){
			if(str1[i+j] !== str2[j]){
				break;
			}
		}
		if(j === m){
			return i;
		}
		
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(cindexOfIgnoreCase(s1, s2));
