class EditorBackend {
    constructor() {
        this.pages = template;
    }

    all() {
        return this.pages;
    }

    add(name) {
        console.log(name + " has been clck");
        switch (name) {
            case "Navigation": {
                this.pages.unshift({
                    type: "Navigation",
                    style:
                        {

                        },
                });
                break;
            }
            case "Heading": {
                this.pages.push({
                    type: "Heading",
                    text: "heading text",
                    style:
                        {

                        },
                });
                break;
            }
            case "Image": {
                this.pages.push({
                    type: "Image",
                    url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    style:
                        {

                        },
                });
                break;
            }
            case "Button": {
                this.pages.push({
                    type: "Button",
                    text: "button text here",
                    url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    style:
                        {

                        },
                });
                break;
            }
            case "Divider": {
                this.pages.push({
                    type: "Divider",
                    url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    style:
                        {

                        },
                });
                break;
            }
            case "Spacer": {
                this.pages.push({
                    type: "Spacer",
                    url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    style:
                        {

                        },
                });
                break;
            }
            default: {
                break;
            }
        }
    }
}

let template = [
    {
        id: 0,
        type: "Heading",
        text: "heading 1",
        style: {
            color: "black",
            fontSize: "10vh",
            textAlign: "left",
        },
    },
    {
        id: 1,
        type: "Heading",
        text: "heading 2",
        style: {
            color: "black",
            fontSize: "20vh",
            textAlign: "center",
        },
    },
    {
        id: 2,
        type: "Heading",
        text: "heading 3",
        style: {
            color: "black",
            fontSize: "30vh",
            textAlign: "right",
        },
    },
    {
        id: 3,
        type: "Divider",
        text: "rounded divider",
        style: {
            borderTop: "8px solid #bbb",
            borderRadius: "5px",
        },
    },
    {
        id: 4,
        type: "Divider",
        text: "dashed divider",
        style: {
            borderTop: "3px dashed #bbb",
            borderRadius: "5px",
        },
    },
    {
        id: 5,
        type: "Divider",
        text: "solid divider",
        style: {
            borderTop: "3px solid #bbb",
        },
    },
    {
        id: 6,
        type: "Image",
        text: "alt text here",
        url: "https://images.unsplash.com/photo-1583485056322-f0ba6fe51508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80",
        style: {
            width: "100%",
            borderRadius: "5px",
        },
    },
    {
        id: 7,
        type: "Divider",
        text: "dotted divider",
        style: {
            borderTop: "3px dotted #bbb",
            borderRadius: "5px",
        },
    },
    {
        id: 8,
        type: "Button",
        text: "button text here",
        onClick: "some script maybe or something idk",
        style: {
            borderTop: "3px dotted #bbb",
            borderRadius: "5px",
        },
    }
];

export default EditorBackend;