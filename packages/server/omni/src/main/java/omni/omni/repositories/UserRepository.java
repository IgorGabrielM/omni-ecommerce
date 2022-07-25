package omni.omni.repositories;

import omni.omni.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface UserRepository extends JpaRepository<User, String> {




}

