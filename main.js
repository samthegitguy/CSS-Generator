<!-- Toast notification script starts -->
function toast(text) {
	var x = document.getElementById("toast");
	document.getElementById("desc").innerHTML = text;
	x.className = "show";
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 5000);
}


function loader() {
	$("#loader").fadeOut().empty();
	$("#super").fadeIn();
}


<!--     Slides script      -->


var slides = $('.slide');
slides.first().before(slides.last());
<!--   Slider script  starts   -->
<!--     Next slide starts      -->
$('button').on('click', function () {
	slides = $('.slide');
	var button = $(this);
	var activeSlide = $('.active');
	var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	if (button.attr('id') == 'next') {
		$('.slide').css("background-color", color);
		$('#header').css("background-color", color);
		slides.last().after(slides.first());
		activeSlide.removeClass('active').next('.slide').addClass('active');
		$("#title").html($(".active").attr('id'));
	}


	<!--     Next slides ends     -->


	<!--    previous onchange slides script starts      -->
	if (button.attr('id') == 'previous') {
		$('.slide').css("background-color", color);
		$('#header').css("background-color", color);
		slides.first().before(slides.last());
		activeSlide.removeClass('active').prev('.slide').addClass('active');
		$("#title").html($(".active").attr('id'));
	}
});
var list = document.querySelectorAll("ul.option li");
Array.prototype.slice.call(list).forEach(function (listItem) {
	listItem.addEventListener('click', function (e) {
		$(".dropbtn").text(this.innerHTML)
		updateout();
	});
});


function show() {
	document.getElementById("Dropdown").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function test(t) {
	update(t.value);
}
$(document).on('input', '#blur', function () {
	update($(this).val());
});
$(document).on('input', '#hor', function () {
	update($(this).val());
});
$(document).on('input', '#vertical', function () {
	update($(this).val());
});
$(document).on('input', '#ex', function () {
	update($(this).val());
});
$(document).on('input', '#swiData', function () {
	update($(this).val());
});

function update(data) {
	var blur = document.getElementById("blur").value;
	var horizontal = document.getElementById("hor").value;
	var vertical = document.getElementById("vertical").value;
	var spread = document.getElementById("ex").value;
	var color = document.getElementById("color").value;
	if (document.getElementById("swiData").checked) {
		var output = "box-shadow: " + "inset " + horizontal + "px " + vertical + "px " + blur + "px " + spread + "px " + color + ";";
	} else {
		var output = "box-shadow: " + horizontal + "px " + vertical + "px " + blur + "px " + spread + "px " + color + ";";
	}
	$("#data").val(output);
	$("#tox").css({
		'box-shadow': horizontal + 'px ' + vertical + 'px ' + blur + 'px ' + spread + 'px ' + color
	});
}

function border(t) {
	updateout(t.value);
}
$(document).on('input', '#topL', function () {
	updatebor($(this).val());
});
$(document).on('input', '#topR', function () {
	updatebor($(this).val());
});
$(document).on('input', '#Bl', function () {
	updatebor($(this).val());
});
$(document).on('input', '#Br', function () {
	updatebor($(this).val());
});
$(document).on('input', '#width', function () {
	updateout($(this).val());
});
$(document).on('input', '#full', function () {
	updatefull($(this).val());
});

function updatebor(data) {
	var topL = document.getElementById("topL").value;
	var topR = document.getElementById("topR").value;
	var bl = document.getElementById("Bl").value;
	var br = document.getElementById("Br").value;
	var borOutput = "border-radius: " + topL + "px " + topR + "px " + br + "px " + br + "px;";
	$("#data-border").val(borOutput);
	$("#dox").css({
		'border-radius': topL + 'px ' + topR + 'px ' + bl + 'px ' + br + 'px '
	});
}

function updatefull(data) {
	var full = document.getElementById("full").value;
	var borOutput = "border-radius: " + full + "px " + full + "px " + full + "px " + full + "px;";
	$("#data-border").val(borOutput);
	$("#dox").css({
		'border-radius': full + "px " + full + "px " + full + "px " + full + "px"
	});
}

function updateout(data) {
	var color = document.getElementById("Bcolor").value;
	var width = document.getElementById("width").value;
	if ($(".dropbtn").html() === "Select border style") {
		var type = "solid";
	} else {
		var type = $(".dropbtn").html();
	}
	var outpt = "border: " + width + "px " + type + " " + color + ";";
	$("#datborder").val(outpt);
	$("#dox").css({
		'border': width + 'px ' + type + color
	});
}


<!--  Vertical slides script -->


var vslides = $('.vslide');
vslides.first().before(vslides.last());
$('button').on('click', function () {
	vslides = $('.vslide');
	var button = $(this);
	var activevslide = $('.vactive');
	if (button.attr('id') == 'vnext') {
		vslides.last().after(vslides.first());
		activevslide.removeClass('vactive').next('.vslide').addClass('vactive');
		$("#title").html($(".vactive").attr('id'));
	}
	if (button.attr('id') == 'vprevious') {
		vslides.first().before(vslides.last());
		activevslide.removeClass('vactive').prev('.vslide').addClass('vactive');
		$("#title").html($(".vactive").attr('id'));
	}
});

$("#code").click(function () {
	swal("</> coded By Abhi for the community");
})


function copy(data) {
	toast("Code successfully copied ✔");
	var copyText = document.getElementById(data);
	copyText.select();
	document.execCommand("copy");
}