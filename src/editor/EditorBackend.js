class EditorBackend {
    constructor() {
        this.pages = template;
    }

    setPage(page) {
        this.pages = page;
    }

    editJson = (field, value, selected) => {
        console.log(this.pages[selected][field])
        this.pages[selected][field] = value;
    }

    editJsonArray = (field, secondaryField, value, selected) => {
        //delete if undefined
        console.log(this.pages[selected][field], field, secondaryField, value, selected)
        if(value === undefined){
            this.pages[selected][field].splice(secondaryField, 1);
        }
        else {
            console.log(this.pages[selected]);
            this.pages[selected][field][secondaryField] = value;
            
        }

    }

    addToJsonArray = (field, jsonObj, selected) => {
        this.pages[selected][field].push(jsonObj);
    }

    deleteSection = (selected) => {
        this.pages.splice(selected, 1);
    }

    all() {
        return this.pages;
    }

    add(name) {
        switch (name) {
            case "Navigation": {
                this.pages.unshift({
                    type: "Navigation",
                    brand: "Navbar Brand",
                    brandUrl: "#home",
                    links: [
                        {
                            text: "home",
                            url: "www.google.ca",
                        },
                        {
                            text: "second",
                            url: "www.yahoo.ca",
                        }
                    ],
                    style:
                    {
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        top: "25%",
                        position: "absolute",
                        backgroundColor: "#dfe6e9",
                        color: "black",
                        fontFamily: "inherit",
                        marginLeft: "inherit",
                        marginRight: "inherit",
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
                        color: "#000",
                        backgroundColor: "#FFF",
                        fontFamily: "inherit",
                        paddingTop: "inherit", 
                        paddingBottom: "inherit",
                        textAlign: "center",
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
                        paddingTop: "inherit",
                        paddingBottom: "inherit",
                        backgroundColor: "#FFF",
                        justifyContent: "center",
                        borderRadius: "0px",
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
                        margin: "5px",
                        borderTop: "8px solid black",
                        borderRadius: "5px",
                        width: "100%",
                    },
                });
                break;
            }
            case "Spacer": {
                this.pages.push({
                    type: "Spacer",
                    style:
                    {
                        width: "100%",
                        height: "50px",
                    },
                });
                break;
            }
            case "Row": {
                this.pages.push({
                    type: "Row",
                    columns: [
                        {
                            type: "Button",
                            text: "button text here",
                            url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                            style:
                            {

                            },
                        },
                        {
                            type: "Button",
                            text: "button text here",
                            url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                            style:
                            {

                            },
                        },
                        {
                            type: "Button",
                            text: "button text here",
                            url: "https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                            style:
                            {

                            },
                        },
                    ],
                    style:
                    {
                        width: "100%",
                        height: "50px",
                    },
                });
                break;
            }
            case "Icon": {
                this.pages.push({
                    type: "Icon",
                    faClassName: "fa fa-car",
                    style:
                    {
                        fontSize: "50px",
                        color: "red",
                    },
                });
                break;
            }
            case "Video": {
                this.pages.push({
                    type: "Video",
                    url: "https://www.youtube.com/watch?v=33ChEMiqeBE",
                    autoplay: "true",
                    loop: "true",
                    style:
                    {
                        backgroundColor: "blue",
                        height: "200px",
                        width: "300px",
                    },
                });
                break;
            }
            case "ButtonGroup": {
                this.pages.push({
                    type: "ButtonGroup",
                    style:
                    {
                    },
                });
                break;
            }
            case "Card": {
                this.pages.push({
                    type: "Card",
                    style:
                    {
                    },
                });
                break;
            }
            case "Carousel": {
                this.pages.push({
                    type: "Carousel",
                    style:
                    {
                        width: "100%",
                        height: "50%",
                        backgroundColor: "red",
                    },
                });
                break;
            }
            case "Jumbotron": {
                this.pages.push({
                    type: "Jumbotron",
                    style:
                    {
                    },
                });
                break;
            }
            case "List": {
                this.pages.push({
                    type: "List",
                    style:
                    {
                    },
                });
                break;
            }
            case "Pagination": {
                this.pages.push({
                    type: "Pagination",
                    style:
                    {
                    },
                });
                break;
            }
            case "Popover": {
                this.pages.push({
                    type: "Popover",
                    style:
                    {
                    },
                });
                break;
            }
            case "Table": {
                this.pages.push({
                    type: "Table",
                    style:
                    {
                    },
                });
                break;
            }
            case "Toast": {
                this.pages.push({
                    type: "Toast",
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

        
        console.log(name, this.pages)
    }
}

let template = [];

// let template = [
//     {
//         id: 0,
//         type: "Heading",
//         text: "heading 1",
//         style: {
//             color: "black",
//             fontSize: "10vh",
//             textAlign: "left",
//         },
//     },
//     {
//         id: 1,
//         type: "Heading",
//         text: "heading 2",
//         style: {
//             color: "black",
//             fontSize: "20vh",
//             textAlign: "center",
//         },
//     },
//     {
//         id: 2,
//         type: "Heading",
//         text: "heading 3",
//         style: {
//             color: "black",
//             fontSize: "30vh",
//             textAlign: "right",
//         },
//     },
//     {
//         id: 3,
//         type: "Divider",
//         text: "rounded divider",
//         style: {
//             borderTop: "8px solid #bbb",
//             borderRadius: "5px",
//         },
//     },
//     {
//         id: 4,
//         type: "Divider",
//         text: "dashed divider",
//         style: {
//             borderTop: "3px dashed #bbb",
//             borderRadius: "5px",
//         },
//     },
//     {
//         id: 5,
//         type: "Divider",
//         text: "solid divider",
//         style: {
//             borderTop: "3px solid #bbb",
//         },
//     },
//     {
//         id: 6,
//         type: "Image",
//         text: "alt text here",
//         url: "https://images.unsplash.com/photo-1583485056322-f0ba6fe51508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80",
//         style: {
//             width: "100%",
//             borderRadius: "5px",
//         },
//     },
//     {
//         id: 7,
//         type: "Divider",
//         text: "dotted divider",
//         style: {
//             borderTop: "3px dotted #bbb",
//             borderRadius: "5px",
//         },
//     },
//     {
//         id: 8,
//         type: "Button",
//         text: "button text here",
//         onClick: "some script maybe or something idk",
//         style: {
//             borderTop: "3px dotted #bbb",
//             borderRadius: "5px",
//         },
//     }
// ];

export default EditorBackend;