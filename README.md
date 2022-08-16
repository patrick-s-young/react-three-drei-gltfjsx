# Mixamo Character Animation with React Three Fiber and drei's useGLTF and useAnimations  

In this [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) example, I employeed 
[drei](https://github.com/pmndrs/drei)'s useGLTF and useAnimation to create a looping collection of [Mixamo](https://www.mixamo.com) 
dance animations (with some state-management help from [zustand](https://github.com/pmndrs/zustand)).

To get the Mixamo assets into react three fiber, check out this excellent tutorial from 
[Code Workshop](https://www.youtube.com/watch?v=q7yH_ajINpA).

As demonstrated in the above [YouTube tutorial](https://www.youtube.com/watch?v=q7yH_ajINpA), once your [Mixamo](https://www.mixamo.com) 
assets have been prepped and exported to a gltf file, you can use the command-line tool, [gltfjsx](https://github.com/pmndrs/gltfjsx), 
to generate a declarative and re-usable [react three fiber](https://www.npmjs.com/package/@react-three/fiber) JSX component.

Animation can then be addeed to the gltfjsx-generated component with useEffect:
```
  useEffect(() => {
    if (prevActionName !== undefined) {
      actions[prevActionName].fadeOut(0.5);
    }
    actions[actionName]
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play();
  }, [actions, actionName, prevActionName])
```

![01_24fps](https://user-images.githubusercontent.com/42591798/184921934-7acac7ba-5818-4118-b8bd-56bb8f5f3875.gif)


## View In Sandbox


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/patrick-s-young/react-three-drei-gltfjsx.git # or clone your own fork
cd react-three-drei-gltfjsx
npm install
npm start
```

## Built With
* [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) - React renderer for three.js.
* [@react-three/drei](https://www.npmjs.com/package/@react-three/drei) - Helper library for @react-three/fiber.
* [zustand](https://www.npmjs.com/package/zustand) - State-management solution that uses simplified flux principles.
* [Mixamo](https://www.mixamo.com/) - Free animated 3D characters for games, film, and more.

## Author

* **Patrick Young** - [Patrick Young](https://github.com/patrick-s-young)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



