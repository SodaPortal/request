#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod request;
mod save;

// taken from: https://github.com/FabianLars/mw-toolbox/
#[cfg(target_os = "macos")]
mod menu;

fn main() {
    save::init_save_file();

    let builder = tauri::Builder::default();
    // taken from: https://github.com/FabianLars/mw-toolbox/
    #[cfg(target_os = "macos")]
    let builder = builder.menu(menu::menu());

    builder
        .invoke_handler(tauri::generate_handler![
            save::read_json_file,
            save::write_json_file,
            save::remove_from_json_file,
            save::edit_save,
            save::remove_folder,
            save::edit_folder,
            save::collect_folders,
            request::send_request,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
