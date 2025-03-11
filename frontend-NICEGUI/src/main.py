from nicegui import ui

ui.markdown('LOGIN')
with ui.column():
    username = ui.input(label='Username')
    password = ui.input(label='Password', password=True)
    ui.button("Login", on_click=)
    ui.label('Quasar').classes('q-ml-xl')

ui.run()