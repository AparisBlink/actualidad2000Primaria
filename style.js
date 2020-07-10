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

				{ name: 'Lista 123 granate', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista abc azul oscuro', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista 123 verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista 123 rosa', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista abc azul claro', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista 123 azul', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista abc morada', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista 123 azul claro', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista abc verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },

				{ name: 'Lista desordenada color', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada blanca', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },


				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },

				{ name: 'Énfasis naranja', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis morado', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis verde', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Énfasis azul', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Énfasis rosa', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
                
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td-1' } }
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
