function startCountAnimation($element) {
    const countTo = $element.attr('data-count');

    $({ countNum: $element.text() }).animate({
        countNum: countTo
    }, {
        duration: 1500,
        easing: 'linear',
        step: function () {
            $element.text(Math.floor(this.countNum));
        },
        complete: function () {
            $element.text(this.countNum);
            // alert('finished');
        }
    });
}

// Set up waypoints to trigger the count animation when the element is in view
$('.counting').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            startCountAnimation($(this.element));
            this.destroy(); // Remove waypoint after triggering
        }
    },
    offset: 'bottom-in-view' // Adjust the offset based on your layout
});