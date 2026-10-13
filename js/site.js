const header = document.querySelector(".top");
const toggle = document.querySelector(".nav-toggle");

toggle?.addEventListener("click", () => {
	const open = header.classList.toggle("is-open");
	toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".faq-item button").forEach((button) => {
	button.addEventListener("click", () => {
		const item = button.closest(".faq-item");
		const open = item.classList.toggle("is-open");
		button.setAttribute("aria-expanded", String(open));
		const mark = button.querySelector("span");
		if (mark) mark.textContent = open ? "–" : "+";
	});
});

document.querySelectorAll("[data-photo]").forEach((frame) => {
	const img = frame.querySelector("img");
	if (!img) return;
	const ready = () => frame.classList.add("is-ready");
	img.addEventListener("load", ready);
	if (img.complete && img.naturalWidth > 0) ready();
});

document.querySelectorAll("[data-tabs]").forEach((root) => {
	const tabs = [...root.querySelectorAll('[role="tab"]')];
	const panels = [...root.querySelectorAll('[role="tabpanel"]')];

	const select = (id) => {
		tabs.forEach((tab) => {
			const on = tab.getAttribute("aria-controls") === id;
			tab.setAttribute("aria-selected", String(on));
			tab.tabIndex = on ? 0 : -1;
		});
		panels.forEach((panel) => {
			panel.classList.toggle("is-open", panel.id === id);
			panel.hidden = panel.id !== id;
		});
	};

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => select(tab.getAttribute("aria-controls")));
	});
});

