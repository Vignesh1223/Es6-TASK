//task: get the value of c and use array destructuring and asign it to seperate variable 

function add2(a,b,...c)
{
    let[d,e,f,g,h]=c;
    console.log('a= '+a);
    console.log('b= '+b);
    console.log('d= '+d);
    console.log('e= '+e);
    console.log('f= '+f);
    console.log('g= '+g);
    console.log('h= '+h);
}
add2(1,2,3,4,4,55,66);


