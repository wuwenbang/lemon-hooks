import useLocalStorageState from 'src/hooks/useLocalStorageState';

export default function TestuseLocalStorageState() {
  const [person, setPerson] = useLocalStorageState('person', { name: 'xiaoming', age: 22 });
  const onChangePerson = () => {
    setPerson((person) => ({ ...person, age: person.age + 1 }));
  };
  return (
    <div>
      <div> Age:{person.age}</div>
      <button onClick={onChangePerson}>Add Age</button>
    </div>
  );
}
