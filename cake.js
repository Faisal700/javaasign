
//*** Star function of Birthday Cake   ***  //

function findMaxNum(arr) {
		  return Math.max.apply(null, arr);
		}
        function sam(){
		   var arr = []; 
		   var n=prompt("Enter Total Numbers of Candles");
		   alert("You can Enter Upto "+ n +" Numbers of Candles");
		   for (var i = 0; i < n; i++) {
		   arr[i] = parseInt(prompt('Enter a number'), 10);
		}

		var maxNum = findMaxNum(arr);
		document.write("<h1> The Candle at number "+ maxNum + " is the Largest candle</h1>");
	}

//*** End function of Birthday Cake  ******   //
//
  //-------------------------------------------------//   

//*** Start function of Grade  ******   //


      function grad()
      {

        var grd, roundoff, result;

               grd=parseInt( prompt("Enter your grade"));
                //grd=int.Parse(document.write());
            //Console.WriteLine("Grd is ");
            //Console.WriteLine(grd);
            //cout << "Enter your grade";
            //cin >> grd;

            roundoff=grd%5;

            // document.write(roundoff);

            if (roundoff==4 && grd!=38 && grd>38)
            {

                result=grd+1;
                document.write("Your Grade is ",result);
                //cout << "Your Grade is" << &result << "\n";
            }

                 else if (roundoff==3 && grd!=38 && grd>38)
            {

                result= grd+2;
                document.write("Your Grade is ", result);
                //cout << "Your Grade is" << &result << "\n";
            }

            else if (roundoff==2 && grd!=38 && grd>38)
            {

                result= grd+3;
                document.write("Your Grade is ", result);
                //cout << "Your Grade is" << &result << "\n";
            }
        

            else if (roundoff==1 && grd!=38 && grd>38)
            {

                result= grd+4;
                document.write("Your Grade is ", result);
                //Cout << "Your Grade is" << &result << "\n";
            }
           else if(grd <40)
              {
              	document.write("<h1>You are failed<h1>");
              }


            else
            {
                document.write("result remains same");
                //Cout << "result remains same\n";
            }

      }
       
       //*** End function of Grade  ******   //
  //-------------------------------------------------// 
     //*** Start function of Average  ******   //
     
function Average(eng,math,theo,sci,his)
			{
				ave = (eng+math+theo+sci+his)/5;
				return(ave);
			}
			function avg(){
			var studname = prompt ("Enter Student Name:","");
			var gr_eng = parseInt (prompt ("Enter grade in English:"," "));
			var gr_math = parseInt (prompt ("Enter grade in Math:"," "));
			var gr_theo = parseInt (prompt ("Enter grade in Theology:"," "));
			var gr_sci = parseInt (prompt ("Enter grade in Science:"," "));
			var gr_his = parseInt (prompt ("Enter grade in History:"," "));
			var ave=Average(gr_eng,gr_math,gr_theo,gr_sci,gr_his);
			document.write ("<center><h1> STUDENT GRADE SHEET </h1><hr width='75%' color='blue' size='3'>");
			document.write ("<table><tr><td>Student<td>Name:<td><b>",studname,"</b>");
			document.write ("<tr><td><b><u>Subject:</b></u><td><br>");
			document.write ("<tr><td><br><td> English:<td>",gr_eng);
			document.write ("<tr><td><br><td> Math:<td>",gr_math);
			document.write ("<tr><td><br><td> Theology:<td>",gr_theo);
			document.write ("<tr><td><br><td> Science:<td>",gr_sci);
			document.write ("<tr><td><br><td> History:<td>",gr_his);
			document.write ("<tr><td>Average<td>Grade:<td><b><p>",ave,"</b>");
			if (ave >= 40)
				{
					status = "Passed"
				}
				else if(ave == 84)
				{
                    ave++;
				}
				else
				{	
					status = "Failed";
				}

				document.write ("<tr><td>Status:<td><br><td><b>",status,"</b></table><hr width=75% color='blue' size=3>"); 
			   
			}

			//*** End function of Average  ******   //
	  //-------------------------------------------------//
	  //*** Start function of Triplets  ******   //
	
          function compareTriplets() {
				let p1 = 0, p2 = 0, aliceScore = 0, bobScore = 0;
				//var a =parseInt(prompt("Enter the size of alice array"));
				var a = [10 ,12, 50];
				var b = [20,20,10];
				while (p1 < a.length && p2 < b.length) {
				    if (a[p1] > b[p2]) {
				        aliceScore += 1;
				        p1 += 1;
				        p2 += 1;
				    } else if (a[p1] < b[p2]) {
				        bobScore += 1;
				        p1 += 1;
				        p2 += 1;

				    } else {
				        p1 += 1;
				        p2 += 1;
				    }
				}
				
				document.write([aliceScore, bobScore]);
				}
              // compareTriplets([10 ,12, 50],[20,20,10]);
          //*** End function of Average  ******   //
	  //-------------------------------------------------//
	      //*** Start function of Sum of an Array  ******   //
	       
	      function arraysum(){
	      	var addition = [];
				addition.push(2);
				addition.push(3);

				var total = 0;
				for (var i = 0; i < addition.length; i++)
				{
				    total += addition[i];
				}
				document.write("Sum of an array is "+ total);
//                var inputArray = [];
// 			   var size = 3; //Maximum Array size

// 			  for(var i=0; i<size; i++) {

// 					//Taking Input from user
// 				inputArray[i] = prompt('Enter Element ' + (i+1));
// 				}
// 				for(var j=0;j<size;j++){
// 				  var sum ="";
//                   sum +=inputArray[j]; 
// //Print the array in the console.
//                   document.write(sum);  
//               }
	      }

	       //*** End function of Array Sum  ******   //
	  //-------------------------------------------------//
	      //*** Start function of Staircase  ******   //
	      
	      function stairc() {
             var n = parseInt(prompt("Enter The size of StairCase"));
		    for (var i = 1; i <= n; i++) {
		        var col = i;
		        for(var j = 1; j <= n- col; j++) {
		            document.write(' ');
		        }
		        for(var j = 1; j <= col; j++) {
		           document.write('#');
		        }
		           document.write('<br>');
		    } 

}
         //*** End function of  Stairs  ******   //
	  //-------------------------------------------------//
	      //*** Start function of Time conversion  ******   //
	      
	      function myDateFormat() {

		    var dd = d.getDate(),
		        mm = d.getMonth() + 1,
		        yyyy = d.getFullYear();
		    if (dd < 10) dd = '0' + dd;
		    if (mm < 10) mm = '0' + mm;
		    return dd + '-' + mm + '-' + yyyy;
		}

		var d = new Date('Thu Jul 09 2015 08:00:00 GMT+0300 (GTB Daylight Time)');
		myDateFormat(d);


		window.onload = showTheTime;

			function showTheTime() {
			     var now = new Date();

		 document.getElementById("showTime"). innerHTML = showTheHours(now.getHours()) + 
			showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
			     setTimeout("showTheTime()",1000);

			     function showTheHours(theHour) {
			        return (showMilitaryTime() || (theHour > 0 && theHour < 13)) ? theHour : (theHour 
			         == 0) ? 12 : theHour-12;
			     }

			     function showZeroFilled(inValue) {
			        return (inValue > 9) ? ":" + inValue : ":0" + inValue;
			     }

			     function showMilitaryTime() {
			        return (document.getElementById  ("showMilitary").checked);
			     }

			     function showAmPm() {
			        return (showMilitaryTime()) ? "" : (now.getHours() < 12) ? " AM" : " PM";
			     }
			}

			   //*** End function of  Time Conversion  ******   //
	  //-------------------------------------------------//
	      //*** Start function of Plus Minus   ******   //
	      
	     
			    var i,h=0,l=0,z=0;
		var array = [3, -4, 21, 6];

		function myFunction() {
			
           document.getElementById("elements").innerHTML = "Array Elements are "+array;
		}

		function myFunctiona() {

			for (i = 0; i < 4; i++)
            {

                if (array[i] > 0)
                {
                    h = h + 1;
                }
                else if (array[i] < 0)
                {
                    l = l + 1;
                }
                else
                {
                    z = z + 1;
                }
            }
            document.getElementById('positive').innerHTML = "positive numbers are "+ h;
            document.getElementById('negative').innerHTML = "negative numbers are "+l;
            document.getElementById('z').innerHTML = "Equal to zero numbers are  "+z;
        }     
        //*** End function of  Plus Minus  ******   //
	  //-------------------------------------------------//
	      //*** Start function of Digonal Difference   ******   //

		   function processData()
		   {
            const input = [[11,2,4],[4,5,6],[10,8,-12]];
// Complete the diagonalDifference function below.
			function diagonalDifference(arr) {
			    let sum = 0;
			    for (var i = 0; i <= arr.length - 1; i++) {
			        sum += arr[i][i] - arr[i].reverse()[i];
			    }
			    return Math.abs(sum);
			}
			document.write(diagonalDifference(input));
		   }
		   //*** End function of  Digonal Difference ******   //
	  //-------------------------------------------------//
	      //*** Start function of Min Max sum  ******   //
	      
	      function miniMaxSum(arr) {
			  arr.sort();
			  var minSum = sum(arr.slice(0, -1));
			  var maxSum = sum(arr.slice(1));
			  console.log(minSum, maxSum);
			}

			function sum(subArr) {
			  return subArr.reduce(function(a, b) {
			    return a + b;
			  }, 0);
			}

			miniMaxSum([1, 4, 2, 5, 3]);
			miniMaxSum([42, 24, 12, 57, 3]);
			miniMaxSum([100, 102, 101, 103, 104]);

			 //*** End function of  Min Max sum ******   //
	  //-------------------------------------------------//
	      //*** Start function of bigSum  ******   //
	      function bigSum()
	      {
            
	      }