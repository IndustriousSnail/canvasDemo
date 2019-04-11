// function random() {
//     const num = Math.random() * 6;
//     if (num > 4) {
//         return 1;
//     } else if (num > 2) {
//         return 2;
//     } else {
//         return 0;
//     }
// }

const chessLayout = [];  // 15*15二维数组，0：无子，1：黑子，-1：白子

/**
 * 初始化棋盘
 */
for (let i = 0; i < 15; i++) {
    chessLayout.push([]);
    for (let j = 0; j < 15; j++) {
        chessLayout[i].push(0);
    }
}

/**
 * 检测胜负
 */
function checkOutcome() {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (chessLayout[i][j] === 0) {
                // 该位置无子
                continue;
            }
            const color = chessLayout[i][j];
            {
                let count = 0;
                // 检测横向是否连成五子
                for (let i2 = i + 1; i2 < i + 5 && i2 < 15; i2++) {
                    if (chessLayout[i2][j] == color) {
                        count++;
                    }
                }
                if (count >= 4) {
                    console.log('S', i, j);
                    return color;
                }
            }
            {
                let count = 0;
                // 检测纵向是否连成五子
                for (let j2 = j + 1; j2 < j + 5 && j2 < 15; j2++) {
                    if (chessLayout[i][j2] == color) {
                        count++;
                    }
                }
                if (count >= 4) {
                    console.log('E', i, j);
                    return color;
                }
            }
            {
                let count = 0;
                // 检测ES方向是否连成五子
                for (let i2 = i + 1, j2 = j + 1; i2 < i + 5 && i2 < 15 && j2 < j + 5 && j2 < 15; j2++, i2++) {
                    if (chessLayout[i2][j2] == color) {
                        count++;
                    }
                }
                if (count >= 4) {
                    console.log('ES', i, j);
                    return color;
                }
            }
            {
                let count = 0;
                // 检测WS方向是否连成五子
                for (let i2 = i + 1, j2 = j - 1; i2 < i + 5 && i2 < 0 && j2 > j - 5 && j2 >= 0; j2--, i2++) {
                    if (chessLayout[i2][j2] == color) {
                        count++;
                    }
                }
                if (count >= 4) {
                    console.log('WS', i, j);
                    return color;
                }
            }

        }
    }
    return 0;
}
