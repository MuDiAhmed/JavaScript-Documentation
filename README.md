
# JavaScript Documentation Sample

###  JsDoc
Check [JsDoc](https://jsdoc.app/) for more info
 1. Open a terminal
 2. Run `npx jsdoc .\src\ -c .\jsdoc.json`


### APIDoc
Check [APIDoc](https://apidocjs.com/) for more info
 1. Open a terminal
 2. Run `npx apidoc -i .\src\ -o .\apidoc\ -c .\apidoc.json`

### UML diagrams
Note: check imgs directory for samples  
You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
User ->> Frontend: Go to Mes ventes groupement
Frontend -->> API: bigmap-data-sales(comparison)
Frontend -->> Frontend: merge/calculate data
Frontend--x User: show grid
Note right of API: API thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

User-->Frontend: change filter
User->API: Yes... John, how are you?
```

a flow chart:
**Note:** check imgs directory for samples  
We can use this diagram to describe Frontend scenarios 
```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```