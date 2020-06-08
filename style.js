(function (blink) {
	'use strict';

	var Actualidad2000PRIMStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	Actualidad2000PRIMStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_Actualidad2000PRIM',
		ckEditorStyles: {
			name: 'Actualidad2000PRIM',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 7', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },

				{ name: 'Lista 123 granate', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista abc azul oscuro', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista 123 azul', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista 123 verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista abc azul claro', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },

				{ name: 'Lista desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'Lista desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'Lista desordenada 4', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'Lista desordenada 5', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'Lista desordenada 6', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'Lista desordenada 7', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },
				{ name: 'Lista desordenada 8', element: 'ul', attributes: { 'class': 'bck-ul bck-ul8' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Caja 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Caja 7', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box7' } },
				{ name: 'Caja 8', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },

				{ name: 'Énfasis naranja', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis morado', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis verde', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Énfasis azul', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Énfasis rosa', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'Énfasis 6', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'Énfasis 7', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'Énfasis 8', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },

				{ name: 'Icono Draw', element: 'span', attributes: { 'class': 'icon icon-draw' } },
				{ name: 'Icono Write', element: 'span', attributes: { 'class': 'icon icon-write' } },
				{ name: 'Icono Speaking', element: 'span', attributes: { 'class': 'icon icon-speaking' } },
				{ name: 'Icono Reading', element: 'span', attributes: { 'class': 'icon icon-reading' } },
				{ name: 'Icono Star', element: 'span', attributes: { 'class': 'icon icon-star' } }
			]
		},

		init: function (scope) {
			var that = scope || this;
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.removeFinalSlide();
			that.handleScrollEnd();
			that.setTooltip();
			window.editar && that.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', that.handleScrollEnd);
		 		that.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	Actualidad2000PRIMStyle.prototype = _.extend({}, new blink.theme.styles.basic(), Actualidad2000PRIMStyle.prototype);

	blink.theme.styles.Actualidad2000PRIM = Actualidad2000PRIMStyle;

})( blink );
