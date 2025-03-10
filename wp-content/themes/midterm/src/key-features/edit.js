/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<section {...useBlockProps()}>
			<div class="features-container">
				<div class="feature">
					<figure>
						<img src="https://fastly.picsum.photos/id/535/200/200.jpg?hmac=0vK1wlOyeZ3PfsgTuPgZfCyZeBmx_aNys09auM4tXgw" />
					</figure>
					<div class="text-box">
						<h3>Feature Name</h3>
						<p>
							Description of the feature and how it enhances the value of the
							system
						</p>
					</div>
				</div>
				<div class="feature">
					<figure>
						<img src="https://fastly.picsum.photos/id/535/200/200.jpg?hmac=0vK1wlOyeZ3PfsgTuPgZfCyZeBmx_aNys09auM4tXgw" />
					</figure>
					<div class="text-box">
						<h3>Feature Name</h3>
						<p>
							Description of the feature and how it enhances the value of the
							system
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
