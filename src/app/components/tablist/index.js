export default class Tablist {
    constructor(el) {
        this.el = $(el); // accept DOM, selector and jQ object
        this.el[0].tablist = this;
        this.select(this.el.data('selected') || 0);

        this.el.on('click.tablist', '[role="tab"]', (e) => {
            var i = this.getTabs().index(e.currentTarget);
            this.select(i);
        });
    }

    select(i) {
        if (i === this.selected || i == null) return;
        var tabs = this.getTabs();
        var panels = this.getPanels();

        var __tabs = tabs.filter('.active');
        var __panels = panels.filter('.active');
        __tabs.removeClass('active');
        __panels.removeClass('show');

        tabs[i].classList.add('active');
        panels[i].classList.add('active');
        setTimeout(() => {
            __panels.removeClass('active');
            panels[i].classList.add('show');
        }, 200);
        // TODO: detect animation time
    }

    __select(i) {
        if (i === this.selected) return;
        var tabs = this.getTabs();
        var panels = this.getPanels();
        var panel;

        this.selected = i;
        tabs.each((_i, tab) => {
            panel = panels.get(_i);
            if (i === _i) {
                tab.classList.add('active');
                panel.classList.add('active', 'show');
            } else {
                tab.classList.remove('active');
                panel.classList.remove('active', 'show');
            }
        });
    }

    getTabs() {
        return this.el.find('[role="tab"]');
    }

    getPanels() {
        return this.el.find('[role="tabpanel"]');
    }
}

// Init all roles on document load
$(() => {
    // Be careful of conflicts with Bootstrap scripts
    $('[role="tablist"]').each((i, v) => {
        new Tablist(v);
    });
});
