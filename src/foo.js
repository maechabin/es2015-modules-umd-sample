class Foo {
  init() {
    alert('foo');
  }
}
export default Foo;
window['Foo'] = Foo;
