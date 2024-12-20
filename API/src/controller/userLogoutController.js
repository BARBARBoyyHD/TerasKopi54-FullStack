exports.logout = (req, res) => {
  res
    .status(202)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .clearCookie("CSRF-TOKEN", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("USERNAME", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("Role", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
    .json({
      message: "Logout Success",
    });
};
