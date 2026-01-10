import CreateDoctors from "../Admin Pages/CreateDoctors";

const CreateDoctorPage = ({ addDoctor }) => {
  return (
    <div className="p-6">
      <CreateDoctors addDoctor={addDoctor} />
    </div>
  );
};

export default CreateDoctorPage;
