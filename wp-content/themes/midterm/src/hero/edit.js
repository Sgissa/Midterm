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
			<div class="hero-container">
				<figure>
					<img src="https://fastly.picsum.photos/id/691/1300/300.jpg?hmac=5_lJGTARbdHYihEJy7PFXV5UxO-Rw3YjgaeCB9Fxc6c" />
				</figure>
				<h1>Powerful Solutions, Simplified. Elevate Your Workflow Today</h1>
				<p>
					Streamline your processes, boost productivity, and scale effortlessly
					with our all-in-one platform.
				</p>
				<button class="hero-btn">Request Demo</button>
			</div>
		</section>
	);
}
