##### Generate empty files in format 001 Week 01 - 01.01.2024 - 07.01.2024.docx
```shell
    # PowerShell script to create weekly files for a given year

function Create-Weekly-Files {
    param (
        [int]$year
    )
    $firstDayOfYear = Get-Date -Year $year -Month 1 -Day 1

    for ($i = 0; $i -lt 52; $i++) {
        $startWeek = $firstDayOfYear.AddDays(7 * $i)
        $endWeek = $startWeek.AddDays(6)
        $fileName = "{0:D3} Week {1:D2} - {2} - {3}.docx" -f ($i + 1), ($i + 1), $startWeek.ToString("dd.MM.yyyy"), $endWeek.ToString("dd.MM.yyyy")

        # Create an empty file with the specified name
        New-Item -Path . -Name $fileName -ItemType "file"
    }
}

# Call the function with the desired year
Create-Weekly-Files -year 2024

```



#### Just List in PowerShell to compare
```shell

# PowerShell script to list weeks of a given year

function List-Weeks-Adjusted {
    param (
        [int]$year
    )
    $firstDayOfYear = Get-Date -Year $year -Month 1 -Day 1
    $weeks = @()

    for ($i = 0; $i -lt 52; $i++) {
        $startWeek = $firstDayOfYear.AddDays(7 * $i)
        $endWeek = $startWeek.AddDays(6)
        $weekStr = "{0:D3} Week {1:D2} - {2} - {3}.docx" -f ($i + 1), ($i + 1), $startWeek.ToString("dd.MM.yyyy"), $endWeek.ToString("dd.MM.yyyy")
        $weeks += $weekStr
    }

    return $weeks
}

# Call the function with the desired year
$adjustedWeeks2024 = List-Weeks-Adjusted -year 2024
$adjustedWeeks2024

```