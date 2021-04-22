function helperFn(){
    console.log(`
    Following are the commands:
    1.node  mycli.js view <"directory name"> tree
    2.node  mycli.js view <"directory name"> flat
    3.node mycli.js  organize <"directory name">
    4.node mycli.js  help `);
    
}

module.exports = {
    helperFun : helperFn
}