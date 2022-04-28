//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**

 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-test', {
	title: __( 'My Custom Block' ), // Block title.
	icon: 'bank', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Brinda'),
		__('My Custom Block'),
		// __( 'test' ),
		// __( 'CGB Example' ),
		// __( 'create-guten-block' ),
	],

	/**
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		function updateContent(event) {
			props.setAttributes({content: event.target.value})
		  }
		  function updateColor(value){
			  props.setAttributes({color: value.hex})
		  }
  
		  return React.createElement(
			  "div", 
			  null, 
			  React.createElement(
				  "h3", 
				  null, 
				  "Your Border Box"
			  ), 
			  React.createElement(
				  "input", {
					  type: "text",
					  value: props.attributes.content,
					  onChange: updateContent
				  }
			  ),
			  React.createElement(wp.components.ColorPicker, {
					color: props.attributes.color,
					onChangeComplete: updateColor
			  })
		  );
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return wp.element.createElement("h3", {
			style: {
			  color: `${props.attributes.color}`
			}
		  }, props.attributes.content);
	},
} );
