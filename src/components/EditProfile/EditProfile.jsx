import { Avatar, Box, Button, Modal, TextField } from "@mui/material";

export const EditProfile = ({ open, onClose, profileUser }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const avatarPics = [
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658_vfeumr.jpg",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/young-woman-white_25030-39552_l54dms.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/fun-3d-cartoon-casual-character-woman_183364-80070_pwmyt2.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/handsome-businessman-suit_88465-811_stoyer.jpg",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/woman-profile-cartoon_18591-58480_jnl3j1.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/businessman-icon-color-vector-illustration_755164-2088_yd0wms.jpg",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/3d-illustration-person-with-glasses_23-2149436191_dzffnu.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/3d-vector-young-smiling-woman-with-light-sin-tone-brown-short-hair-user-avatar_624031-153_k3loas.jpg",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179149/avatars/3d-illustration-person-with-sunglasses_23-2149436188_ht42x5.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179149/avatars/businessman-character-avatar-isolated_24877-60111_px3ur9.avif",
    "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179149/avatars/3d-illustration-person_23-2149436182_wdwryc.avif",
  ];

  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Avatar alt="profilepic" src={profileUser.profile_pic} />
            <Button>Change Avatar</Button>
          </Box>
          <Box>
            <TextField d="outlined-basic" label="Name" variant="outlined" />
          </Box>
          <Button onClick={() => onClose()}>Cancel</Button>
          <Button>Submit</Button>
        </Box>
      </Modal>
    </Box>
  );
};
