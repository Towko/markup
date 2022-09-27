import 'Plugins/tooltipPlugin';

export default function initTooltip() {
	jQuery('a[title]').hoverTooltip({
		tooltipStructure: '<div class="hover-tooltip"><div class="tooltip-text"></div></div>'
	});
}