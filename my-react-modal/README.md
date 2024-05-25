# my-react-modal-ad62 - project OCR2022_P14_npm-module

A React modal component created using `create-react-app` (with Typescript).

---

<br />

# Installation

Node version : 20.11.0 (see .nvmrc file)

Text editor: VSCode

Install with `npm i my-react-modal-ad62`

<br />

# How to use

import : `import { ModalComponent } from "my-react-modal-ad62"`

## Modal props type :

```
type ModalComponentProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  displayToggleButton?: boolean;
  toggleButtonText?: string;
  toggleButtonClass?: string;
  modalContainerClass?: string;
  children: React.ReactNode;
}
```

### ModalComponentProps props description :

| Prop name           |             Type              |     Default value      | Description                                                                                                                                                                                    |
| ------------------- | :---------------------------: | :--------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showModal           |            boolean            |         false          | The boolean state passed in component props to display the modal                                                                                                                               |
| setShowModal        | React.SetStateAction<boolean> |           -            | The setState action passed in component props to change the boolean state                                                                                                                      |
| displayToggleButton |            boolean            |          true          | Display a toggle modal button or not                                                                                                                                                           |
| toggleButtonText    |            string             |      'Open modal'      | Custom text displayed into the toggle modal button                                                                                                                                             |
| toggleButtonClass   |            string             |   'toggle-modal-btn'   | Custom css for the toggle modal button. Add a custom className will overwrite the default value.                                                                                               |
| modalContainerClass |            string             | 'modal-container-base' | Custom css for the modal container. A default value is passed who sets : position: fixed; left: 50%; transform: translate(-50%, 0%); min-width: 280px; padding: 50px 20px 20px; z-index: 9999; |
| children            |        React.ReactNode        |           -            | Custom nodes to display into the modal (see exemple below)                                                                                                                                     |

## Exemple :

```
// set the state :
const [showModal, setShowModal] = React.useState(false);

// you can add you custom css classes for the modal via props (modalContainerClass and the toggleButtonClass).
// don't forget to pass the state props to the modal component :
<ModalComponent modalContainerClass="you-can-add-here your-custom-class" showModal={showModal} setShowModal={setShowModal}>
    <h1 className="text-3xl font-bold">
        Your title
    </h1>
    <p className="m-0 p-0 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
        perferendis quia fugiat dolor magnam. Sunt recusandae odit ut maiores
        enim nemo assumenda, laudantium iste non eum? Quibusdam accusamus
        necessitatibus voluptatibus! Distinctio dolore necessitatibus
        sapiente, consequatur sint dignissimos voluptates rem excepturi
        aliquid obcaecati quo pariatur sequi accusamus illum dolorum
        voluptatum accusantium ipsa alias consequuntur dolorem fuga eos beatae
        saepe. Dolor, doloribus? Numquam officiis error doloribus harum eius!
        Architecto magni aliquam, nihil repellendus veritatis excepturi eius
        explicabo molestias a, ad hic. Voluptate necessitatibus debitis minima
        et assumenda, architecto iusto ut soluta ullam.
    </p>
</ModalComponent>
```
