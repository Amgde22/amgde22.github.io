align-items : needs the container to have set height ( body is 100vh )

if you want to remove underline from before do
 ::before {
     display:inline-block;
}
<!-- font awesone -->
 font-family: 'Font Awesome 6 Free';
 content: '\f004' ;

 <!-- flex -->
 giv width to stuff like
 width:min-content;
header-div2 was taking header-div1's place because width wasn't 
specified