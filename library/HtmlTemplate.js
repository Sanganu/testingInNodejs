const HtmlTemplate =(managerTemplate,engineerTemplate,internTemplate)=>{
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TeamProfile Generator</title>
  

    </head>
    <body>
    <header>
    <h1 class="text-5xl font-bold mt-0 mb-6">Team Profile</h1>
    </header>
    <section class="overflow-hidden text-gray-700">
    ${managerTemplate}
    </section>
    <section class="overflow-hidden text-gray-700">
    ${engineerTemplate}
    </section>
    <section class="overflow-hidden text-gray-700">
    ${internTemplate}
    </section>
    <script>
    import 'tw-elements';
    </script>
    </body>
</html>
   `
}

module.exports = HtmlTemplate;