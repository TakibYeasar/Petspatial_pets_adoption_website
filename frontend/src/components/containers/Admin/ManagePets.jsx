import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  managePetsAPI,
  updatePets,
  deletePet,
} from "../../../redux/features/pets/petsApi";

const ManagePets = () => {
  const dispatch = useDispatch();
  const { pets, loading, error } = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(managePetsAPI());
  }, [dispatch]);

  const handleApproveStatusChange = (petId, newStatus) => {
    dispatch(updatePets({ id: petId, approveStatus: newStatus }));
  };

  const handleAdoptStatusChange = (petId, newStatus) => {
    dispatch(updatePets({ id: petId, adoptStatus: newStatus }));
  };

  const handleDeletePet = (petId) => {
    dispatch(deletePet({ id: petId }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Manage Pets</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Breed</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Approve Status</th>
            <th className="border px-4 py-2">Adopt Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.length > 0 ? (
            pets.map((pet) => (
              <tr key={pet.id}>
                <td className="border px-4 py-2">
                  <img
                    src={pet.image || "/assets/placeholder.png"}
                    alt={pet.name}
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </td>
                <td className="border px-4 py-2">{pet.name}</td>
                <td className="border px-4 py-2">{pet.breed}</td>
                <td className="border px-4 py-2">{pet.age}</td>
                <td className="border px-4 py-2">
                  <select
                    className="border px-2 py-1"
                    value={pet.is_approved ? "approved" : "pending"}
                    onChange={(e) =>
                      handleApproveStatusChange(pet.id, e.target.value === "approved")
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <select
                    className="border px-2 py-1"
                    value={pet.is_adopted ? "adopted" : "available"}
                    onChange={(e) =>
                      handleAdoptStatusChange(pet.id, e.target.value === "adopted")
                    }
                  >
                    <option value="available">Available</option>
                    <option value="adopted">Adopted</option>
                  </select>
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDeletePet(pet.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No pets available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePets;
