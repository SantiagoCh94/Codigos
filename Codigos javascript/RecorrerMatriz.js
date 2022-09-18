const matriz = [[1,2,3],[4,5,6],[7,8,9]];
for (x=0;x<matriz.length;x++) {
    text = ""
    for (y=0;y<matriz[x].length;y++) {
        text += matriz[x][y] + "\t";
    }
    console.log(text)
}