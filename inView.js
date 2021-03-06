function Checker(query) {
    var that = this;
    this.isTipped = false;
    this.timer = 0;
    this.elements = document.querySelectorAll(query);
    if (this.elements.length < 1) {
        throw new Error(`Have not found any element with selector '${query}'`);
    }

    function scroller(e) {
        that.timer || setTimeout(function () {
            that.timer = null;
            requestAnimationFrame(inView);
        }, 600);
        that.timer = 1;
    };

    function inView() {
        var wT = window.pageYOffset,
            wB = wT + window.innerHeight,
            cRect, pT, pB, p = 0;
        while (p < that.elements.length) {

            cRect = that.elements[p].getBoundingClientRect();
            pT = wT + cRect.top;
            pB = pT + cRect.height;

            if (wT < pB && wB > pT) {               
                if (!that.elements[p].visble) {
                    that.elements[p].inVisble = false;
                    that.callBackOnVisible(that.elements[p]);
                    that.elements[p].visble = true;
                }
            } else {
                if (!that.elements[p].inVisble) {
                    that.elements[p].visble = false;
                    that.callBackOnInVisible(that.elements[p]);
                    that.elements[p].inVisble = true;
                }
            }
            p++;
        }
    };

    this.callBackOnVisible = function () {
        if (!that.isTipped) {
            console.log('Add custom callback please. Tip: checker.addAction(callback)')
            that.isTipped = true;
        }
    };
    this.callBackOnInVisible = function () {}

    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', scroller, false);
}

Checker.prototype.addActionOnVisible = function (func) {
    this.callBackOnVisible = func;
};

Checker.prototype.addActionOnInVisible = function (func) {
    this.callBackOnInVisible = func;
};
