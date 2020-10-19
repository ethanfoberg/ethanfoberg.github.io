var answer = '0 ';
for (var i = 0; i <= 12; i++) {
    for (var j = 0; j <= 12; j++) {

        if(i === 0 && j > 0){
          answer += ' ' + j + ' ';
        } 
        else if(j === 0 && i>0){
          answer += '' + i + '   ';
        } 
        else if(i>0 && j>0){
        answer += (i*j) + '  ';
        }
    }
        answer += "\n";//had to look up newline character, as without it I just kept getting all the text in a straight line.
}
line(117,291,111,54);
line(321,100,61,102);
fill(0, 0, 0);
textSize(12);
text(answer,100,100);