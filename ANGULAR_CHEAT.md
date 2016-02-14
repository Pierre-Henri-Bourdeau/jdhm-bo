

###
Call a child component function from parent component:

```
<button (click)="EditClientComponent.test()">Create client</button>
<jdmh-edit-client #EditClientComponent></jdmh-edit-client>
