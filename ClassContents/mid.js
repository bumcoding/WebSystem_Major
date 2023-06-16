// 13번
(() => {
    function func(v) {
        return () => v++;
    }
    let f1 = func(2);
    let f2 = func(3);
    console.log('13번:', f1() + f2() + f1());
})();
