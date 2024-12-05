interface UserFormProps {
  name: string | undefined;
}

export default function UserForm({ name }: UserFormProps) {
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "20rem",
        }}
      >
        <label>
          Nachname: <input disabled type="text" value={name} />
        </label>
        <label>
          Vorname: <input type="text" />
        </label>
      </form>
    </>
  );
}
